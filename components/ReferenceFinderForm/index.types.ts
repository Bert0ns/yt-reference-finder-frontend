import {ProcessResponse} from "@/lib/types";
import React from "react";

export interface MainFormProps {
    resetFormState: () => void;
    setIsLoading: (loading: boolean) => void;
    setShowResults: (show: boolean) => void;
    setResults:  React.Dispatch<React.SetStateAction<ProcessResponse>>;
    results: ProcessResponse | null;
    isLoading: boolean;
}