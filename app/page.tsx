import { Button } from "./components/common/ui/button/button";

export default function Home() {
  return (
   <div className="flex gap-4 p-4"> <Button 
   variant="default"  // hoặc "secondary", "outline", "ghost", "link"
   size="default"     // hoặc "sm", "lg", "icon"
 >
   Click me
 </Button>
 <Button variant="secondary">
   Click me
 </Button>
 <Button variant="outline">
   Click me
 </Button>
 <Button variant="ghost">
   Click me
 </Button>
 <Button variant="link">
   Click me
 </Button>
 <Button variant="default" size="sm">
   Click me
 </Button>
 <Button variant="default" size="lg">
   Click me
 </Button>
 
 </div>
  
  );
}
