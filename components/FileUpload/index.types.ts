export interface FileUploadProps {
    onSubmit: (formData: FormData) => Promise<void>
    isLoading: boolean
}