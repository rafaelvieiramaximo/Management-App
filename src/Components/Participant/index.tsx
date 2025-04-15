import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./style";

interface prop {
    name: string;
    onRemove: () => void;
}

export function Participant({ name, onRemove }: prop) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>

            <TouchableOpacity style={styles.button} onPress={onRemove}>
                <Text style={styles.text_button}>
                    -
                </Text>
            </TouchableOpacity>
        </View>
    );
}
