export interface TasksProps {
    id?: number
    projectId?: number
    userId?: number
    title?: string
    content?: string
    concluded?: boolean
    createdAt?: string
  
    user?: {
      name: string
    }
  }
  
  export const tasks = [
    {
      id: 1,
      projectId: 1,
      userId: 1,
      title: 'Iniciando testes',
      content:
        'Proin urna ante, consectetur vitae varius ac, consectetur tincidunt eros. Maecenas in leo massa. Nullam ut enim arcu. Nulla mollis augue nec est vulputate posuere. Nam vitae lacus libero. Proin non pellentesque purus. Cras nec nibh lobortis mi accumsan molestie vitae eget arcu. Duis eros ante, posuere id finibus sed, vulputate vel quam. Fusce quam est, congue vestibulum convallis vitae, sodales ornare nisl. Sed malesuada velit ac eros dignissim, eget bibendum magna accumsan. Phasellus lobortis condimentum sapien ut gravida. Mauris semper ornare nibh, non accumsan augue lacinia egestas. Maecenas tempus ex risus, et faucibus est blandit et. Vivamus consectetur, elit sed scelerisque dapibus, lacus dui eleifend diam, vel eleifend arcu eros vitae diam. Praesent vestibulum posuere dui a pulvinar. Morbi sapien sapien, porttitor ut pellentesque nec, laoreet quis enim',
      concluded: false,
      created_at: '2022-10-12',
  
      user: {
        name: 'Jhon do',
      },
    },
  
    {
      id: 2,
      projectId: 1,
      userId: 1,
      title: 'Tratamento de código',
      content:
        'Proin urna ante, consectetur vitae varius ac, consectetur tincidunt eros. Maecenas in leo massa. Nullam ut enim arcu. Nulla mollis augue nec est vulputate posuere. Nam vitae lacus libero. Proin non pellentesque purus. Cras nec nibh lobortis mi accumsan molestie vitae eget arcu. Duis eros ante, posuere id finibus sed, vulputate vel quam. Fusce quam est, congue vestibulum convallis vitae, sodales ornare nisl. Sed malesuada velit ac eros dignissim, eget bibendum magna accumsan. Phasellus lobortis condimentum sapien ut gravida. Mauris semper ornare nibh, non accumsan augue lacinia egestas. Maecenas tempus ex risus, et faucibus est blandit et. Vivamus consectetur, elit sed scelerisque dapibus, lacus dui eleifend diam, vel eleifend arcu eros vitae diam. Praesent vestibulum posuere dui a pulvinar. Morbi sapien sapien, porttitor ut pellentesque nec, laoreet quis enim',
      concluded: false,
      created_at: '2022-10-12',
  
      user: {
        name: 'Jhon do',
      },
    },
  
    {
      id: 3,
      projectId: 1,
      userId: 1,
      title: 'Remover componentes desnecessários',
      content:
        'Proin urna ante, consectetur vitae varius ac, consectetur tincidunt eros. Maecenas in leo massa. Nullam ut enim arcu. Nulla mollis augue nec est vulputate posuere. Nam vitae lacus libero. Proin non pellentesque purus. Cras nec nibh lobortis mi accumsan molestie vitae eget arcu. Duis eros ante, posuere id finibus sed, vulputate vel quam. Fusce quam est, congue vestibulum convallis vitae, sodales ornare nisl. Sed malesuada velit ac eros dignissim, eget bibendum magna accumsan. Phasellus lobortis condimentum sapien ut gravida. Mauris semper ornare nibh, non accumsan augue lacinia egestas. Maecenas tempus ex risus, et faucibus est blandit et. Vivamus consectetur, elit sed scelerisque dapibus, lacus dui eleifend diam, vel eleifend arcu eros vitae diam. Praesent vestibulum posuere dui a pulvinar. Morbi sapien sapien, porttitor ut pellentesque nec, laoreet quis enim',
      concluded: true,
      created_at: '2022-10-12',
  
      user: {
        name: 'Jhon do',
      },
    },
  
    {
      id: 4,
      projectId: 1,
      userId: 1,
      title: 'Mudar componentes visuais',
      content:
        'Proin urna ante, consectetur vitae varius ac, consectetur tincidunt eros. Maecenas in leo massa. Nullam ut enim arcu. Nulla mollis augue nec est vulputate posuere. Nam vitae lacus libero. Proin non pellentesque purus. Cras nec nibh lobortis mi accumsan molestie vitae eget arcu. Duis eros ante, posuere id finibus sed, vulputate vel quam. Fusce quam est, congue vestibulum convallis vitae, sodales ornare nisl. Sed malesuada velit ac eros dignissim, eget bibendum magna accumsan. Phasellus lobortis condimentum sapien ut gravida. Mauris semper ornare nibh, non accumsan augue lacinia egestas. Maecenas tempus ex risus, et faucibus est blandit et. Vivamus consectetur, elit sed scelerisque dapibus, lacus dui eleifend diam, vel eleifend arcu eros vitae diam. Praesent vestibulum posuere dui a pulvinar. Morbi sapien sapien, porttitor ut pellentesque nec, laoreet quis enim',
      concluded: true,
      created_at: '2022-10-12',
  
      user: {
        name: 'Jhon do',
      },
    },
  
    {
      id: 5,
      projectId: 1,
      userId: 1,
      title: 'Isolar e reaproveitar componentes',
      content:
        'Proin urna ante, consectetur vitae varius ac, consectetur tincidunt eros. Maecenas in leo massa. Nullam ut enim arcu. Nulla mollis augue nec est vulputate posuere. Nam vitae lacus libero. Proin non pellentesque purus. Cras nec nibh lobortis mi accumsan molestie vitae eget arcu. Duis eros ante, posuere id finibus sed, vulputate vel quam. Fusce quam est, congue vestibulum convallis vitae, sodales ornare nisl. Sed malesuada velit ac eros dignissim, eget bibendum magna accumsan. Phasellus lobortis condimentum sapien ut gravida. Mauris semper ornare nibh, non accumsan augue lacinia egestas. Maecenas tempus ex risus, et faucibus est blandit et. Vivamus consectetur, elit sed scelerisque dapibus, lacus dui eleifend diam, vel eleifend arcu eros vitae diam. Praesent vestibulum posuere dui a pulvinar. Morbi sapien sapien, porttitor ut pellentesque nec, laoreet quis enim',
      concluded: true,
      created_at: '2022-10-12',
  
      user: {
        name: 'Jhon do',
      },
    },
  
  ]