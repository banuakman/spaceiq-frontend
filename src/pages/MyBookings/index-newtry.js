import api from "../../api";
import { useMutation, useQuery, useQueryClient } from "react-query";

const fetchBookings = async () => await api.getallbookings();

function MyBookings() {
  const { status, data, error } = useQuery("records", fetchBookings);
}
export default MyBookings;
