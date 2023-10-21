export interface School {
    id:number
    name:string
    address: string
    districtId: number
    about: string
    history: string
    phoneNumber: string
    email: string
    curriculumId: number
    academicLevelId: number
    createdAt:string
    deletedAt: string
    district: District,
    curriculum: CurriculumInSchool
    academicLevel:AcademicLevelInSchool
    photos:object[]
    reviews:object[]
    subjects:object[]
}

export interface District {
    id:number
    name:string
    region:string
}
export interface CurriculumInSchool {
    id:number
    name:string
    description:string
}
export interface AcademicLevelInSchool {
    id:number
    level:string
    curriculumId:number
}

export interface SchoolsResponseData {
    data: School[]
    perPage: number
    totalItems: number
}

export interface SchoolStoreState {
    schoolsResponse: SchoolsResponseData
    response: object
    error: object
    currPage: number
    singleSchool: School | null
}

export interface ISchoolsTableProps {
    schools: School[]
}