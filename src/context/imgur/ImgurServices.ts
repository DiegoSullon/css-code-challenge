import { getImgaesResponse } from "../../mockups/imgurResponse"
import { ImgurData } from "../../Types/imgur"

export function getImages() {
    return new Promise<{ data: ImgurData[] }>((resolve) => {
        setTimeout(() => {
            resolve(getImgaesResponse)
        }, 1000)
    })
}