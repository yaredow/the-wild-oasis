import styled from "styled-components";
import useRecentBooking from "./useRecentBooking";
import Spinner from "../../ui/Spinner";
import useRecentStays from "./useRecentStays";
import Stats from "./Stats";
import useCabin from "../cabins/useCabin";
import SalesChart from "./SalesChart";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { isLoading, bookings } = useRecentBooking();
  const {
    isLoading: isLoading1,
    stays,
    confirmedStays,
    numDays,
  } = useRecentStays();
  const { cabins, isLoading2 } = useCabin();

  if (isLoading || isLoading1 || isLoading2) return <Spinner />;
  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        isLoading1={isLoading1}
        numDays={numDays}
        cabinsCount={cabins.length}
      />
      <div>Statistics</div>
      <div>Today&apos;s activity</div>
      <div>Chart stay duration</div>
      <div>Chart Sales</div>
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
