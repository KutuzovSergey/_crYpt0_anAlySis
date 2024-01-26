import { useState, ChangeEvent } from "react";
import { _email, _phone } from "../utils/regularExpressions";
import { UseUploadImageType } from "../type/typeHooks/typesUseInput";
import { ProfilePhotoType } from "../type/typesMain";

export const useUploadImage = (user: HTMLImageElement, inputUpload: React.RefObject<HTMLInputElement>): UseUploadImageType => {

    const [srcProfilePhoto, setSrcProfilePhoto] = useState<ProfilePhotoType>(user);

    const uploadImage = (): void =>{
        inputUpload.current?.click();
    }

    const showUploadedImage = (e: ChangeEvent<HTMLInputElement>): void =>{
        
        const inputFile: any = e.target as HTMLInputElement;
        
        const file = inputFile.files[0];
        
        let reader = new FileReader();

        if (file) {
            reader.readAsDataURL(file);
            
            reader.onload = function() {
                setSrcProfilePhoto(reader.result);
            }

            reader.onerror = () =>{
                console.error(reader.error);
            }
        }
    }

    const resetInputFile = (user: HTMLImageElement): void =>{
        setSrcProfilePhoto(user);
    }
    
    return [
        srcProfilePhoto,
        uploadImage,
        showUploadedImage,
        resetInputFile,
    ]
}