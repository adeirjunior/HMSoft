import { Card, Metric, Text, Flex, BadgeDelta } from "@tremor/react";

type RevenueProps = {
  item: {
    title: string;
    metricPrev: string;
    deltaType: string;
    delta: string;
    metric: string;
  };
};

export default function Revenue({
  item: { title, metricPrev, deltaType, delta, metric },
}: RevenueProps) {
  return (
    <Card key={title} className="dark:bg-[#18181b]">
      <Text>{title}</Text>
      <Flex
        justifyContent="start"
        alignItems="baseline"
        className="truncate space-x-3"
      >
        <Metric>{metric}</Metric>
        <Text className="truncate">from {metricPrev}</Text>
      </Flex>
      <Flex justifyContent="start" className="space-x-2 mt-4">
        <BadgeDelta deltaType={deltaType} />
        <Flex justifyContent="start" className="space-x-1 truncate">
          <Text>{delta}</Text>
          <Text className="truncate">to previous month</Text>
        </Flex>
      </Flex>
    </Card>
  );
}
