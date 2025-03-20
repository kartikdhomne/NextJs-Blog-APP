type params = Promise<{ slug: string }>;

async function DynamicRoute({ params }: { params: params }) {
  const { slug } = await params;
  return <div>Hello from slug post :{slug}</div>;
}

export default DynamicRoute;
