import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { User } from "./utils";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  nickname: z.string().min(2, {
    message: "Nickname must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  role: z.array(z.string()),
  status: z.string(),
});

interface EditarProps {
  user: User;
}

const badgeStyles: { [key: string]: string } = {
  Coordenador: "bg-blue-900 hover:bg-blue-800 text-white",
  Professor: "bg-blue-700 hover:bg-blue-600 text-white",
  Aluno: "bg-gray-400 hover:bg-gray-300 text-black",
  "1° semestre": "bg-blue-400 hover:bg-blue-300 text-black",
  "2° semestre": "bg-teal-400 hover:bg-teal-300 text-black",
  "3° semestre": "bg-yellow-400 hover:bg-yellow-300 text-black",
  "4° semestre": "bg-orange-400 hover:bg-orange-300 text-black",
  "5° semestre": "bg-red-400 hover:bg-red-300 text-black",
  "6° semestre": "bg-purple-400 hover:bg-purple-300 text-black",
};

const badges = [
  "Coordenador",
  "Professor",
  "Aluno",
  "1° semestre",
  "2° semestre",
  "3° semestre",
  "4° semestre",
  "5° semestre",
  "6° semestre",
];

type BadgeName = keyof typeof badgeStyles;

const getBadgeClass = (badge: BadgeName) => badgeStyles[badge] || "";

export default function Editar({ user }: EditarProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: user.name,
      nickname: user.nickname,
      email: user.email,
      role: user.role,
      status: user.status,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          Editar
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Editar Usuário</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="nickname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nickname</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cargos</FormLabel>
                  <div className="grid grid-cols-3 gap-2">
                    {badges.map((badge, index) => (
                      <div className="flex gap-2 justify-between items-center">
                        <Checkbox
                          checked={field.value.includes(badge)}
                          onCheckedChange={(checked) => {
                            const newValue = checked
                              ? [...field.value, badge]
                              : field.value.filter(
                                  (role: string) => role !== badge
                                );
                            field.onChange(newValue);
                          }}
                        />
                        <Badge
                          key={index}
                          className={`text-xs ${getBadgeClass(badge)}`}
                        >
                          {badge}
                        </Badge>
                      </div>
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Ativo">Ativo</SelectItem>
                      <SelectItem value="Suspenso">Suspenso</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Salvar alterações</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
