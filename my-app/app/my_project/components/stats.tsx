"use client";

import {Card ,CardContent } from "@/components/ui/card";

export default function Stats(){
    return(
        <section className="stats">
            <Card className="h-20 ">
                <CardContent className="p-6 h-full flex flex-col items-center justify-center text-center">
                    Task Assigned 
                    <br/>
                    <strong>4</strong>
                    </CardContent>
            </Card>

             <Card>
                <CardContent className="p-6 h-full flex flex-col items-center justify-center text-center">
                    Task Completed
                    <br/>
                    <strong>2</strong>
                    </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6 h-full flex flex-col items-center justify-center text-center">
                    In Progress
                    <br/>
                    <strong>1</strong>
                    </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6 h-full flex flex-col items-center justify-center text-center">
                    Project Deadline
                    <br/>
                    <strong>25 May 2026</strong>
                    </CardContent>
            </Card>


            </section>

    )

}

