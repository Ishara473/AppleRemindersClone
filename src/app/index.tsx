import { ActivityIndicator, Text, FlatList } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { getReminders } from "@/services/reminderServices";
import ReminderListItem from "@/components/ReminderListItem";

export default function HomeScreen() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['reminders'],
    queryFn: () => getReminders(),
  });

  if (isLoading) {
    return <ActivityIndicator style={{ marginTop: '20%' }} />;
  }

  if (error) {
    return <Text style={{alignSelf: 'center', marginTop: '20%'}}>{error.message}</Text>;
  }
  
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <ReminderListItem reminderItem={item} />}
    />
  )
}