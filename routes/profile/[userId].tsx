import { PageProps } from "$fresh/server.ts";

function ProfilePageUserIdDynamicRoute(props: PageProps) {
  const id = props.params.userId;

  return (
    <div>This user ID is: {id}</div>
  );
}

export default ProfilePageUserIdDynamicRoute;