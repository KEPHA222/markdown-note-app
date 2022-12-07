import {
  Navigate,
  Outlet,
  useOutlet,
  useOutletContext,
  useParams,
} from "react-router-dom";
import { Note } from "./App";

type NoteLayoutProps = {
  notes: Note[];
};

const NoteLayout = ({ notes }: NoteLayoutProps) => {
  const { id } = useParams();
  const note = notes.find((n) => n.id);

  if (note == null) return <Navigate to="/" replace />;
  return <Outlet context={note} />;
};

export function useNote() {
  return useOutletContext<Note>();
}

export default NoteLayout;
