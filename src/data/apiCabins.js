import supabase from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    throw new Error("This Error In Get Cabins");
  }

  return data;
}

export async function createCabin(newCabinObject) {
  const { data, error } = await supabase
    .from("cabins")
    .insert([newCabinObject])
    .select();

  if (error) {
    throw new Error("Cant Craeted New Cabin");
  }
}

export async function updateCabin(newCabinObject) {}

export async function deleteCabins(id) {
  const { error, data } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    throw new Error("Cabin Cant Deleted");
  }

  return data;
}
