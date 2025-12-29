import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {useForm} from "react-hook-form";
import { z } from"zod";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router";


const signInForm = z.object({
    email: z.email(),
    managerName: z.string(),
    establishmentName: z.string(),
    phone: z.string()
})

type SignUpForm = z.infer<typeof signInForm>

export function SignUp() {

    const navigate = useNavigate()

    const{register, handleSubmit, formState:{isSubmitting}} = useForm<SignUpForm>()

    async function handleSignUp(data: SignUpForm){
        try{
            console.log(data)

            await new Promise((resolve)=>setTimeout(resolve, 2000))

            toast.success("Register Success",{
                action:{
                    label:"Login",
                    onClick:()=>navigate("/sign-in")
                }
            })
        }catch{
            toast.error("Register Invalid")
        }

    }
    return (
        <div className="p-8">
            <Button asChild  variant={"link"} className="absolute right-3 top-3">
                <Link to={"/sign-in"}>Login</Link>
            </Button>
            <div className="w-[350px] flex flex-col justify-center gap 6">
                <div className="flex flex-col gap-2  text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Register your Establishment
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Track your sells via admin panel
                    </p>
                </div>
                <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4 mt-10 ">
                    <div className="space-y-2">
                        <Label htmlFor="name">Manager Name</Label>
                        <Input id="name" type="text" {...register("managerName")}/>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="establishment">Establishment Name</Label>
                        <Input id="establishment" type="text" {...register("establishmentName")}/>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">Your email</Label>
                        <Input id="email" type="email" {...register("email")}/>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="pone">Phone Number</Label>
                        <Input id="phone" type="number" {...register("phone")}/>
                    </div>

                    <Button disabled={isSubmitting} className="w-full" type="submit">Access Panel</Button>
                </form>
            </div>
        </div>
    )


}