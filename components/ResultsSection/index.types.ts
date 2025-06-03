import {ProcessResponse} from "@/lib/types";

export type ResultsSectionProps = ProcessResponse

export interface ResultsSectionRefHandle extends HTMLDivElement{
    setActiveTab: (tab: string) => void;
}