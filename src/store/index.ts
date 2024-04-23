// store/index.ts
import { createStore } from 'vuex';

export default createStore({
  state: {
    comments: [
      { date: "2024-04-01", content: "有活力" },
      { date: "2024-04-01", content: "团结合作" },
      { date: "2024-04-01", content: "创意丰富" },
      { date: "2024-04-01", content: "热情洋溢" },
    ]
  },
  mutations: {
    addComment(state, newComment) {
      state.comments.push(newComment);
    }
  },
  actions: {
  },
  modules: {
  }
});
