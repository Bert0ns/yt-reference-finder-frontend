export interface TextInputProps {
    onSubmit: (formData: FormData) => Promise<void>
    isLoading: boolean
}