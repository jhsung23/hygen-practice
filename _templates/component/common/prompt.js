module.exports = {
  prompt: ({ prompter, args }) =>
    prompter
      .prompt({
        type: 'input',
        name: 'component',
        message: '공통 컴포넌트 이름을 PascalCase로 입력하세요.',
      })
      .then(({ component }) => {
        if (!component) {
          throw new Error('컴포넌트 이름을 입력하세요.');
        }

        return prompter
          .select({
            type: 'input',
            name: 'folder',
            message: '해당 공통 컴포넌트의 분류를 선택해 주세요.',
            choices: ['button', 'input', 'typography', 'link', '직접입력'],
          })
          .then((choice) => {
            if (choice === '직접입력') {
              return prompter
                .prompt({
                  type: 'input',
                  name: 'folder',
                  message: '해당 공통 컴포넌트의 분류를 입력해 주세요.',
                })
                .then(({ folder }) => {
                  return {
                    component,
                    folder,
                    args,
                  };
                });
            }
            return {
              component,
              folder: choice,
              args,
            };
          });
      }),
};
