import {UseFormResetField, UseFormSetValue, UseFormWatch} from "react-hook-form";
import React, {ReactNode} from "react";
import {PhotoIcon} from "@heroicons/react/24/outline";
import {PreviewImage} from "@/components/common/image/PreviewImage";

type Props = {
    title: string;
    id: string;
    watch: UseFormWatch<any>
    children: ReactNode;
    resetField: UseFormResetField<any>
    setValue?:  UseFormSetValue<any>;

}

const InputWatchImage = ({watch, title, id, children, resetField,setValue}: Props) => {
    return (
        <div className='w-full'>
            <span className='text-sm text-gray-700 dark:text-gray-400'>{title}</span>

            {watch(id) && watch(id)[0] !== undefined ? (
                <div
                    className="my-2 relative rounded-lg border-2 border-dashed border-gray-300 py-2 dark:border-osc-200">

                    <PreviewImage image={watch(id)} width={150} height={150}/>
                    <button
                        className="rounded absolute top-2 right-2 bg-red-500 px-4 py-1 text-sm  text-white hover:bg-red-700"
                        onClick={() => {
                            resetField(id);
                            setValue && setValue(id, undefined)

                        }}
                        type="button"
                    >
                        Eliminar archivo
                    </button>
                </div>
            ) : (
                <>
                    <label
                        htmlFor={id}
                        className=' flex py-12 flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 dark:border-osc-200'
                    >
                        <PhotoIcon className='h-5 w-5'/>
                        <span className='text-sm'>Seleccionar archivo</span>
                    </label>
                    {children}
                </>
            )}


        </div>
    )
}
export default InputWatchImage
