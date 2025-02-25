import { convertDateFormat } from "@/libs/convertDate"

import { ContractDocumentProps } from "@/types"

interface PageProps {
  contractDocuments: ContractDocumentProps[]
}

export default function ClientPortal_Contract_Documents({ contractDocuments } : PageProps) {
  return (
    <>
      <div className="mb-[25px]">
        <p className="text-[16px] font-[600] text-portalText mb-2.5">Contract Documents</p>
        <table className="w-full">
          <thead className="bg-[#F8F7F7] text-left text-[#7D7D7D] font-[600] border-b border-[#7D7D7D]">
            <tr>
              <th className="py-2 pl-5 w-7/12">Document Name</th>
              <th className="py-2 w-4/12 text-center">Date</th>
              <th className="py-2 w-1/12 text-center">Open</th>
            </tr>
          </thead>
          <tbody className="text-portalText py-2">
            {contractDocuments.map((item,index) => (
              <tr key={index}>
                <td className="py-2">{item.name}</td>
                <td className="py-2 text-center">{convertDateFormat(item.document_date!)}</td>
                <td className="py-2 text-center">
                  <a href={item.url} target="_blank">
                    <button type="button" className="bg-warning w-[75px] px-5 h-[32px] rounded-[20px] text-[16px] font-[600] text-white shadow-mainShadow">View</button>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
