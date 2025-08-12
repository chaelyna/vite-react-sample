import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    base: '/vite-react-sample/', // 여기에 실제 저장소 이름 입력
    build: {
        outDir: 'dist'
    }

})
