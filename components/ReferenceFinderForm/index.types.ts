import {ProcessResponse} from "@/lib/types";

export interface MainFormProps {
    resetFormState: () => void;
    setIsLoading: (loading: boolean) => void;
    setShowResults: (show: boolean) => void;
    setResults: (results: ProcessResponse | null) => void;
    results: ProcessResponse | null;
    isLoading: boolean;
}