"use client";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const ProductImages = ({ images }: { images: string[]}) => {
    const [current, setCurrent] = useState(0);
    return (
        <div className="space-y-4">
            <Image
                src={images[current]}
                alt='product image'
                width={1000}
                height={1000}
                className="rounded-md min-h-[300px] object-cover object-center"
            />
            <div className="flex">
                {images.map((image, index) => (
                    <div 
                        key={image}
                        onClick={() => {
                            setCurrent(index);
                        }}
                        className='mr-2 cursor-pointer rounded-md'   
                    >
                        <Image
                            className={
                                cn(
                                    "border-2 rounded-md hover:border-orange-300",
                                    current === index && 'border-orange-300'
                                )
                            }
                            src={image} 
                            alt='image' 
                            width={100} 
                            height={100}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default ProductImages;