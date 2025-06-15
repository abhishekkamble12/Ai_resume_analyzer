// services/resumeAnalyzerService.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const makeRequest = async (url, options, retries = MAX_RETRIES) => {
    try {
        const response = await fetch(url, options);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Request failed');
        }

        return data;
    } catch (error) {
        if (retries > 0 && (error.message.includes('Failed to fetch') || error.message.includes('NetworkError'))) {
            console.log(`Retrying request... ${retries} attempts remaining`);
            await sleep(RETRY_DELAY);
            return makeRequest(url, options, retries - 1);
        }
        throw error;
    }
};

export const analyzeResume = async (file, message = '') => {
    try {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('message', message);

        return await makeRequest(`${API_URL}/analyze-resume/`, {
            method: 'POST',
            body: formData,
        });
    } catch (error) {
        console.error('Error analyzing resume:', error);
        throw new Error(error.message || 'Failed to analyze resume');
    }
};

export const sendMessage = async (message, resumeText) => {
    try {
        return await makeRequest(`${API_URL}/analyze-resume/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message,
                resume_text: resumeText,
            }),
        });
    } catch (error) {
        console.error('Error sending message:', error);
        throw new Error(error.message || 'Failed to send message');
    }
};

export const checkHealth = async () => {
    try {
        const response = await makeRequest(`${API_URL}/health/`, {
            method: 'GET',
        });
        return response.status === 'healthy';
    } catch (error) {
        console.error('Health check failed:', error);
        return false;
    }
};
