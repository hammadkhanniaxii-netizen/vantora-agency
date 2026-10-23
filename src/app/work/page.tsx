import { getAllProjects } from '@/lib/content-service';
import WorkArchiveClient from '@/components/work/WorkArchiveClient';

export default async function WorkPage() {
  const projects = await getAllProjects();

  return (
    <div className="bg-porcelain min-h-screen">
      <WorkArchiveClient projects={projects} />
    </div>
  );
}
