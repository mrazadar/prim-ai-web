import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import RazaImage from "@/public/.jpeg";
import Image from "next/image";

interface UserCardProps {
  name: string;
  email: string;
  role: string;
  listIndex: number;
  avatarUrl: string;
}

export const UserCard = (props: UserCardProps) => {
  const { name, email, role, listIndex } = props;
  return (
    <Card className={` ${listIndex % 2 ? "col-span-2" : ""}`}>
      <CardHeader>
        <Image
          src="/images/mrazadar-avatar.jpeg"
          alt={name}
          width={50}
          height={50}
        />
        <CardTitle>{name}</CardTitle>
        <CardDescription>{email}</CardDescription>
      </CardHeader>
      <CardContent>
        <CardDescription>{role}</CardDescription>
      </CardContent>
      <CardFooter>
        <CardAction>
          <Button variant="outline">Edit</Button>
        </CardAction>
        <CardAction>
          <Button variant="outline">Delete</Button>
        </CardAction>
      </CardFooter>
    </Card>
  );
};
