async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="recipe-title"]').value;
  const recipe = document.querySelector('input[name="recipe"]').value;
  const meal_id = document.querySelector('input[name="meal"]').value

  const response = await fetch(`/api/recipe`, {
    method: "POST",
    body: JSON.stringify({
      title,
      recipe,
      meal_id
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".new-recipe-form")
  .addEventListener("submit", newFormHandler);
