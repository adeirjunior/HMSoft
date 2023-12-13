import { Card } from "@nextui-org/react";

export default function CardArray() {
  return (
    <div className="flex flex-col gap-4">
      {(() => {
        const arr = [];
        for (let i = 0; i < 10; i++) {
          arr.push(<Card key={i} className="w-40 h-40"></Card>);
        }
        return arr;
      })()}
    </div>
  );
}
