import Spinner from "../../ui/Spinner";
import CabinRow from "../cabins/CabinRow";
import useCabin from "./useCabin";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";
import Empty from "../../ui/Empty";

function CabinTable() {
  const { isLoading, cabins } = useCabin();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;
  if (!cabins.length) return <Empty resourceName="cabins" />;

  const filterValue = searchParams.get("discount") || "all";

  // FILTER
  let filteredCabin = cabins || [];

  if (cabins) {
    if (filterValue === "all") filteredCabin = cabins;
    if (filterValue === "no-discount")
      filteredCabin = cabins.filter((cabin) => cabin.discount === 0);
    if (filterValue === "with-discount")
      filteredCabin = cabins.filter((cabin) => cabin.discount > 0);
  }

  // SORT
  const sortBy = searchParams.get("sortBy") || "name-asc";

  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;

  const sortedCabin = filteredCabin.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  const sortedCabinByPrice = filteredCabin.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  if (isLoading) return <Spinner />;

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Dicount</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={sortedCabin}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;
