import { createClient } from 'newt-client-js'

interface Image {
    _id:string
    altText:string
    description:string
    fileName:string
    fileSize:number
    fileType:string
    height:number
    metadata:any
    src:string
    title:string
    width:number
}

type RequiredAndPartial<T,K extends keyof T> = Required<Pick<T,K>> & Partial<Omit<T,K>>

export type RequiredImageType = RequiredAndPartial<Image,'_id'|'src'>

export interface Post {
    _id:string
    title: string
    content: string
    image : RequiredImageType[]
    location: {
        lat:number,
        lng:number
    }
}

export interface Text {
    _id:string
    title: string
    body:string
}

export const newtClient = createClient({
    spaceUid: import.meta.env.NEWT_SPACE_UID,
    token: import.meta.env.NEWT_CDN_API_TOKEN,
    apiType: 'cdn',
})