export type GetRoomQuestionsResponse = Array<{
    id: string
    questions: string
    answer: string | null
    createdAi: string
    isGeneratingAnswer?: boolean
}>