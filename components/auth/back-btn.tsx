"use client"

import { link } from "fs";
import { Button } from "../ui/button"
import Link from "next/link";

interface BackBtnProps {
    href:string;
    label:string;

};

export const BackBtn= ({
    href,
    label
}:BackBtnProps) => {
    return(
        <Button
            variant={"link"}
            className="font-normal w-full"
            size={"sm"}
            asChild
        >
            <Link href={href}>
                {label}
            </Link>
        </Button>
    )
}