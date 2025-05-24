import {ProcessResponse} from "@/lib/types";

export interface SubmitButtonProps {
    isLoading: boolean;
    results: ProcessResponse | null;
    resetForm: () => void;
}