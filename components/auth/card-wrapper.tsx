"use client"

import { 
    Card,
    CardContent,
    CardFooter,
    CardHeader
 } from "../ui/card";

import { Header } from "@/components/auth/header";
import { Social } from "./social";
import { BackBtn } from "./back-btn";


interface CardWrapperProps {
    children:React.ReactNode;
    headerLable: string;
    backButtonLable:string;
    backButtonHref:string;
    showSocial?:boolean;
}

export const CardWrapper = ({
    children,
    headerLable,
    backButtonLable,
    backButtonHref,
    showSocial
}:CardWrapperProps) => {
    return (
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                <Header label={headerLable}/>
            </CardHeader>
            <CardContent>
            {children}
            </CardContent>

            {showSocial && (
                <CardFooter>
                    <Social/>
                </CardFooter>
            )}

            <CardFooter>
                <BackBtn
                    label={backButtonLable}
                    href={backButtonHref}
                />
            </CardFooter>

        </Card>
    )
}



