import getBillboard from "@/actions/get-billboard";
import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/products-list";

type Params = Promise<{ billboardId: string }>;

export default async function HomePage(props: { params: Params }) {
  const params = await props.params;
  const { billboardId } = params;

  const billboard = await getBillboard('be3faeaa-5568-4625-9596-e7e6c5ca1395');
  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
}