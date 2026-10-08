import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

export type UploadResult = {
  success: boolean;
  key: string;
  downloadUrl: string;
};

type WorkerResponse = {
  success: boolean;
  filename: string;
  downloadUrl: string;
};

@Injectable({ providedIn: 'root' })
export class CloudflareR2Service {
  private workerBaseUrl = environment.cloudflare.resumeWorkerUrl; // ex: https://resume-upload.workers.dev

  async uploadResume(file: File): Promise<UploadResult> {
    const formData = new FormData();

    // ✅ TEM que bater com o Worker: formData.get('resume_file')s
    formData.append('resume_file', file, file.name);

    const res = await fetch(`${this.workerBaseUrl}/upload`, {
      method: 'POST',
      body: formData,
    });

    if (!res.ok) {
      const txt = await res.text().catch(() => '');
      throw new Error(`Upload falhou: ${res.status} ${txt}`);
    }

    const json = (await res.json()) as WorkerResponse;

    return {
      success: json.success,
      key: json.filename,
      downloadUrl: json.downloadUrl,
    };
  }
}
