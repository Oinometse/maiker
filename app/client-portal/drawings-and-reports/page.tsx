import { getServerSession } from "next-auth/next"
import { options } from "@/app/api/auth/[...nextauth]/options";

import ClientPortal_DrawingAndReports_Documents from "@/components/ClientPortal/DrawingsAndReportsDocuments";

import { getDrawingsAndReports } from "@/services/clientAdministration/drawingsReportsServices";

export default async function DrawingsAndReports() {
  const session = await getServerSession(options);

  const clientID = session?.user.client;

  const drawingsReports = await getDrawingsAndReports(clientID!);

  return (
    <>
      <section className='pl-[335px] pt-[113px] min-h-[1291px]'>
        <div className="p-[50px] pr-0 max-w-[1200px]">
          <h2 className='text-dark font-[800] text-[25px] mb-6'>Drawings and Reports</h2>
          <div className="mb-6">
            <ClientPortal_DrawingAndReports_Documents drawingsReports={drawingsReports}/>
          </div>
        </div>
      </section>
    </>
  )
}
