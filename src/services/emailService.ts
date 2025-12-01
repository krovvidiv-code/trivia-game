// ZeroBounce API Configuration
const ZEROBOUNCE_API_KEY = import.meta.env.VITE_ZEROBOUNCE_API_KEY || "13705fb5691e4461bb16e3f402513456";
const BASE_URL = "https://api.zerobounce.net/v2/validate";

export interface EmailValidationResult {
    isValid: boolean;
    status: string;
    subStatus: string;
}

export const validateEmail = async (email: string, ipAddress: string = ''): Promise<EmailValidationResult> => {
    // If no key is provided, we skip validation (or return true to not block)
    if (!ZEROBOUNCE_API_KEY || ZEROBOUNCE_API_KEY === "YOUR_ZEROBOUNCE_API_KEY") {
        console.warn("ZeroBounce API Key not configured. Skipping validation.");
        return { isValid: true, status: 'unknown', subStatus: 'no_key' };
    }

    try {
        const url = `${BASE_URL}?api_key=${ZEROBOUNCE_API_KEY}&email=${encodeURIComponent(email)}&ip_address=${encodeURIComponent(ipAddress)}`;
        const response = await fetch(url);
        const data = await response.json();

        // ZeroBounce returns a 'status' field. 'valid' is the one we want.
        // 'catch-all' might also be acceptable depending on strictness.
        const isValid = data.status === 'valid';

        return {
            isValid,
            status: data.status,
            subStatus: data.sub_status
        };
    } catch (error) {
        console.error("ZeroBounce validation failed:", error);
        // Fail open (allow user to play if service is down)
        return { isValid: true, status: 'error', subStatus: 'service_error' };
    }
};
