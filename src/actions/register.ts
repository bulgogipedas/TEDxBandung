interface Props {
  email: string;
  password: string;
  job: string;
}

export const register = async (props: Props) => {
  try {
    const res = await fetch("https://reqres.in/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...props }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.log(res);
      return {
        ok: false,
        error: data.error,
      };
    }

    return data;
  } catch (error) {
    console.error(error);
  }
};
