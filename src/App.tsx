import {
  ActionIcon,
  Button,
  Container,
  Group,
  List,
  MultiSelect,
  Stack,
  Text,
} from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import { useViewportSize } from "@mantine/hooks";
import { p_list } from "./const/list.ts";
import { useState } from "react";

function App() {
  const { height } = useViewportSize();
  const [names, setNames] = useState<string[]>([]);
  const [values, setValues] = useState<string[]>([]);
  return (
    <>
      <Container size="lg" h={height}>
        <h1>Junho Kim의 은밀한 목록</h1>
        <Group grow mih={500} align="flex-start">
          <Stack justify="flex-start">
            <Text component="h2">체크 안된 사람 목록 ❌</Text>
            <MultiSelect
              data={p_list.filter((item) => !names.includes(item.value))}
              value={values}
              onChange={setValues}
              placeholder="은밀한 수집가 준호씨의 그 분을 고르세요"
            />
            {names.length === 20 ? (
              <Text>그만 모아... 다 모았어... 🥲</Text>
            ) : (
              <Text>아직 몇발 남았다... 🤲</Text>
            )}
          </Stack>
          <Stack justify="flex-start">
            <Text component="h2">체크 된 사람 목록 ✅</Text>
            <List>
              {names.map((name) => (
                <List.Item key={name}>
                  <Group>
                    <Text>{name}</Text>
                    <ActionIcon
                      variant="subtle"
                      color="red"
                      onClick={() => {
                        setNames((p) => p.filter((i) => i !== name));
                        setValues([]);
                      }}
                    >
                      <IconX size="1rem" />
                    </ActionIcon>
                  </Group>
                </List.Item>
              ))}
            </List>
          </Stack>
        </Group>
        <Group grow>
          <Button
            variant="light"
            my={20}
            onClick={() => setNames((p) => [...p, ...values])}
          >
            수집하기 😘
          </Button>
          <Button
            variant="light"
            my={20}
            color="red"
            onClick={() => {
              setNames([]);
              setValues([]);
            }}
          >
            리셋하기 ⌫
          </Button>
        </Group>
      </Container>
    </>
  );
}

export default App;
