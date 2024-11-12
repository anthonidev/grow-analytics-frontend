'use client';
import Image from 'next/image';
import {useEffect, useState} from 'react';

type Props = {
    image: any;
    width: number;
    height: number;

}

export const PreviewImage = ({width, height, image}: Props) => {
    const [img, setImg] = useState<any>(null);

    useEffect(() => {
        try{
            if (image[0]) setImg(URL.createObjectURL(image[0]));
        }
        catch (e) {
            setImg(image);
        }
    }, [image]);

    return (
        <div className='flex justify-center items-center overflow-hidden  '>
            {img && <Image src={img} alt='banner'
                           className={"rounded-lg  object-contain"}
                           width={height} height={height}
            />
            }
        </div>
    );
};
