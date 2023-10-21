export interface Curriculum {
    id: number
    name: string
    description: string
    levels: AcademicLevel[]
}

export interface AcademicLevel{
    id: number
    level: string
    curriculumId: number
}

export interface CurriculumState {
    curriculums: Curriculum[]
    response?: object
    error?: object

}