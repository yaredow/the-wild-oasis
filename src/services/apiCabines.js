import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.("superbase");
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // Create cabin/edit
  let query = supabase.from("cabins");

  //Create
  if (!id) query.insert([{ ...newCabin, image: imagePath }]).select();

  // Edit
  if (id)
    query
      .update({ other_column: "otherValue" })
      .eq("some_column", "someValue")
      .select();

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }

  // Upload the image
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // if there is an error while uploading the image, prevent a new cabin from cbeing created
  if (storageError) {
    const { data, error } = await supabase
      .from("cabins")
      .delete()
      .eq("id", data.id);

    console.error(error);
    throw new Error("Cabin image could not be uploaded");
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }

  return data;
}
