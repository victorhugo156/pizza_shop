import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {useForm} from "react-hook-form";
import { z } from"zod";
import { toast } from "sonner";


const signInForm = z.object({
    email: z.email()
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {

    const{register, handleSubmit, formState:{isSubmitting}} = useForm<SignInForm>()

    async function handleSignIn(data: SignInForm){
        try{
            console.log(data)

            await new Promise((resolve)=>setTimeout(resolve, 2000))

            toast.success("Verification link has been sent to your mail",{
                action:{
                    label:"Resend",
                    onClick:()=>handleSignIn(data)
                }
            })
        }catch{
            toast.error("Invalid credentials")
        }

    }
    return (
        <div className="p-8">
            <div className="w-[350px] flex flex-col justify-center gap 6">
                <div className="flex flex-col gap-2  text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Access Admin Panel
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Track your sells via admin panel
                    </p>
                </div>
                <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Your email</Label>
                        <Input id="email" type="email" {...register("email")}/>
                    </div>

                    <Button disabled={isSubmitting} className="w-full" type="submit">Access Panel</Button>
                </form>
            </div>
        </div>
    )


}