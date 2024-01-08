---
to: app/components/<%= folder %>/<%= component %>.tsx
---
interface Props extends React.ComponentProps<''> {}

function <%= h.changeCase.pascal(component) %>({}: Props) {}

export default <%= h.changeCase.pascal(component) %>;