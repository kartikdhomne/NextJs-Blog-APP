// type params = Promise<{ slug: string }>;

// async function CreateBlogRoute({ params }: { params: params }) {
//   const { slug } = await params;
//   return <div>Hello from slug post :{slug}</div>;
// }

import { handleSubmission } from "@/app/actions";
import Submitbutton from "@/components/general/Submitbutton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function CreateBlogroute() {
  return (
    <div>
      <Card className="max-w-lg mx-auto">
        <CardHeader>
          <CardTitle>Create Post</CardTitle>
          <CardDescription>
            Create a new post to share with the world
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4" action={handleSubmission}>
            <div className="flex flex-col gap-2">
              <Label>Title</Label>
              <Input name="title" required type="text" placeholder="Title" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Content</Label>
              <Textarea name="content" required placeholder="Content" />
            </div>

            <div className="flex flex-col gap-2">
              <Label>Image URL</Label>
              <Input name="url" required type="url" placeholder="Image url" />
            </div>

            <Submitbutton />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
