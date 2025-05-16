// import { Skeleton } from "@/components/ui/skeleton";
// import Tag from "@/components/ui/Tag";
// import useFetch from "@/hooks/useFetch";
// import { usernameService } from "@/services/api/username.service";

// const NameSuggestions = () => {
//     const fetchUsernames = () =>
//         usernameService.getSuggestions().then(res => res.data.data);

//     const { data, loading } = useFetch(fetchUsernames);

//     return (
//         <div className="space-y-6">
//             <h4 className="gradient-text text-xl font-bold">
//                 Name suggestions:
//             </h4>
//             {loading ? (
//                 <div className="flex flex-wrap gap-2">
//                     {Array.from({ length: 3 }).map((_, index) => (
//                         <Skeleton className="h-[31px] w-[139px]" key={index} />
//                     ))}
//                 </div>
//             ) : data && data?.length > 0 ? (
//                 <div className="flex flex-wrap gap-2">
//                     {data?.map((tag, key) => <Tag key={key}>{tag}</Tag>)}
//                 </div>
//             ) : (
//                 "No result found!"
//             )}
//         </div>
//     );
// };

// export default NameSuggestions;
