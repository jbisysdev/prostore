"use client";
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { 
    DropdownMenu, 
    DropdownMenuTrigger,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuContent,
    DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { SunIcon, MoonIcon, SunMoon } from 'lucide-react';

import { useTheme } from "next-themes";

const ModeToggle = () => {
    const [ mounted, setMounted ] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true)
    }, [mounted]);

    if (!mounted) {
        return null;
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost"
                    className='focus-visible:ring-0 focus-visible:ring-offset-0'
                >
                    {
                        theme === 'system'
                            ? (<SunMoon />)
                            : theme === 'dark'
                                ? (<MoonIcon />)
                                : (<SunIcon />)
                    }
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>
                    Appearance
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                    checked={theme === 'light'}
                    onClick={() => {setTheme('light')}}
                >
                    <SunIcon className='mr-2' height={20} width={20} />
                    Light
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                    checked={theme === 'dark'}
                    onClick={() => {setTheme('dark')}}
                >
                    <MoonIcon className='mr-2' height={20} width={20} />
                    Dark
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                    checked={theme === 'system'}
                    onClick={() => {setTheme('system')}}
                >
                    <SunMoon className='mr-2' height={20} width={20} />
                    System
                </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
 
export default ModeToggle;